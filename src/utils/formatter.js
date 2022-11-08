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
