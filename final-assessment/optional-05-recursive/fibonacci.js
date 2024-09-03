function fibonacci(n) {
  if (n <= 0) {
    return [0];
  }
  if (n == 1) {
    return [...fibonacci(n - 1), n];
  }

  const fbos = fibonacci(n - 1);
  return [...fbos, fbos[fbos.length - 1] + fbos[fbos.length - 2]];
}
// Jangan hapus kode di bawah ini!
export default fibonacci;
