process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let counter = 100; 
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write((i === spinner.length - 1) ? `${spinner[i]}` : `\r${spinner[i]}   ` );
  }, counter);
  counter += 200;
}

