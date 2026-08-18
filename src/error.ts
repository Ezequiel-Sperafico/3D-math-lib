export function error(message: string): "error" {
  console.error(message);
  console.error(`STACK_TRACE: \n${new Error().stack}`);
  return "error";
}
