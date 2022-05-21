// webpack-dev-server/blob/master/lib/Server.js
const obj = {
  sendStats(sockets, stats, force) {
    const shouldEmit =
      !force &&
      stats &&
      (!stats.errors || stats.errors.length === 0) &&
      (!stats.warnings || stats.warnings.length === 0) &&
      stats.assets &&
      stats.assets.every((asset) => !asset.emitted);

    if (shouldEmit) {
      this.sockWrite(sockets, "still-ok");

      return;
    }

    this.sockWrite(sockets, "hash", stats.hash);

    if (stats.errors.length > 0) {
      this.sockWrite(sockets, "errors", stats.errors);
    } else if (stats.warnings.length > 0) {
      this.sockWrite(sockets, "warnings", stats.warnings);
    } else {
      this.sockWrite(sockets, "ok");
    }
  },
};
