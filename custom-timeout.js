function customTimeout(callback, ms) {
  const timer = async function () {
    const end = Date.now() + ms;

    await new Promise((res) => res());

    while (Date.now() < end) {
      await new Promise((res) => res());
    }

    callback();
  };

  return timer();
}

console.log("sync");
customTimeout(() => console.log("Done with customTimeout after 2000 ms"), 2000);
setTimeout(() => console.log("Done with setTimeout after 1000 ms"), 1000);
