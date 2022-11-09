export function convertToRupiah(num) {
  const numrev = num.toString().split("").reverse().join("");
  let rupiah = "";

  for (let i = 0; i < numrev.length; i++)
    if (i % 3 == 0) rupiah += numrev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
}

export function formatDate(dateVal) {
  const date = new Date(dateVal);
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("id-ID", dateOptions);
}

export function getCode(plusNum) {
  const date = new Date();
  const dateVal1 =
    date.getFullYear().toString() +
    date.getMonth().toString() +
    date.getDate().toString();
  const dateVal2 =
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString();
  const ms = date.getMilliseconds() + (plusNum ?? 0);
  return `SJY-${dateVal1}-${dateVal2 + ms.toString()}`;
}
