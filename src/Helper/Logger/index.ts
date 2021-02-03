import { Request, Response, NextFunction } from "express";

interface MessageError {
  code: number;
  message: string;
}

class Logger {
  static logLevel: ["Debug", "info", "warning", "Danger"];
  static _header(level?: string) {
    return `[LibreTI]${level ? `<${level}>` : ""} ${this._getTimestamp()}`;
  }
  static _getTimestamp() {
    const date = new Date();
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
  }
  static request(req: Request, resp: Response, next: NextFunction) {
    console.log(
      `${Logger._header("info")} ${req.connection.remoteAddress}:${
        req.connection.remotePort
      } ${req.method} in ${req.url}`
    );
    next();
  }
  static _log(message: string) {
    console.log(`${Logger._header("info")}: ${message}`);
  }
  static log(err: MessageError) {
    let type;
    if (err.code >= 500) type = "Danger";
    else if (err.code >= 400) type = "Warning";
    else if (err.code >= 300) type = "info";
    else if (err.code >= 200) type = "success";

    console.log(
      `${Logger._header(type)}: code=${err.code},message=${err.message}`
    );
  }
}

export default Logger;
