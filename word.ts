export function wordWrap(rowLength: number, input: string): string[] {
    if (input.length <= rowLength)
      return [input]
  
    const temp = input.split('');
    const result: string[] = [];
  
    while (temp.length > rowLength) {
      if (temp[0] == ' ')
        temp.splice(0, 1)
  
      if (temp[rowLength - 1] == ' ')
        temp.splice(rowLength - 1, 1)
  
      result.push(temp.splice(0, rowLength).join('').trim())
    }
    if (temp.length > 0)
      result.push(temp.splice(0).join('').trim())
  
    return result
  }