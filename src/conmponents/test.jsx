let num = 0;

export default function count() {
  return <p>setInterval(function () {
    num++;
    console.log(num);
  }, 1000);</p>
}
