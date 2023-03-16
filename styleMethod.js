export function ErrorMessage(status)
{
    console.log('Error', status);
}
export function setOutput(responseText, output)
{
    output.innerText = responseText;
}