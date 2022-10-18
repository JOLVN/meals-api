export default (func, timeout = 50) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
  };
}