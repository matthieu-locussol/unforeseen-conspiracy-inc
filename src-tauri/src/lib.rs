mod discord;

use discord::DiscordState;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
   let discord_state = DiscordState::new().ok();

   tauri::Builder
      ::default()
      .setup(|app| {
         if cfg!(debug_assertions) {
            app
               .handle()
               .plugin(tauri_plugin_log::Builder::default().level(log::LevelFilter::Info).build())?;
         }
         Ok(())
      })
      .plugin(tauri_plugin_process::init())
      .plugin(tauri_plugin_shell::init())
      .plugin(tauri_plugin_updater::Builder::new().build())
      .manage(discord_state)
      .invoke_handler(tauri::generate_handler![discord::set_discord_rich_presence])
      .run(tauri::generate_context!())
      .expect("An error occurred while running tauri application");
}
