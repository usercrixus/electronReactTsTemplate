import { ipcMain } from "electron";
import { version } from 'node:process';

ipcMain.handle('logVersion', () => {
    console.log(`Version: ${version}`);
});