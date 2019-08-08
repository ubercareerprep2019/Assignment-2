class Queue
{
  constructor()
   {
    this.items = [];
   }


  enqueue(data)
  {
  this.items.push(data)
  }


  dequeue()
  {
    if(this.isEmpty())
    {
      return("The Queue is Empty")
    }
    else
    {
      return this.items.shift()
    }
  }

  front()
  {
    if(this.isEmpty())
    {
      return "No data in the Queue"
    }
    else
    {
      this.items[0]
    }
  }



  isEmpty()
  {
    return this.items.length === 0
  }
  
}
