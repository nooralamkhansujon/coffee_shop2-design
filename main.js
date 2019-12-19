
class Myfunc
{
  constructor(brand,category,model)
  {
       this.brand    = brand;
       this.category = category;
       this.model    = model;
  }

  get brandget ()
  {
    return this.brand;
  }
  get categoryget()
  {
     return this.category;
  }
  get modelget ()
  {
    return this.model;
  }
  set brandset(brand)
  {
    this.brand = brand;
  }
  set categoryset(category)
  {
    this.category = category;
  }
  set modelset (model)
  {
    this.model  = model;
  }
  multify(x,y)
  {
      return x*y;
  }

}

const myfunc = new Myfunc('HP','computer','321Max');
console.log(myfunc.brandget);
myfunc.brandset = "Dell";
console.log(myfunc.brandget);