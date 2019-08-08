class Stack
{

  constructor()
  {
    this.items = []
  }

  push(data)
  {
    this.items.push(data)
  }


  pop()
  {
    if(this.items.length === 0)
    {
      return "There are no items"
    }
    return(this.items.pop)
  }

  peek()
  {
    return this.items[this.items.length - 1]
  }

  
}
