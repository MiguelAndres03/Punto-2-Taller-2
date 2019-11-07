
class bag{
  pre:
  constructor(initialElements, start, howMany){
   invariant: typeof initialElements === 'Array';
        this.initialElemets.length >= 0;
	typeof start === 'Integer';
	typeof howMany === 'Integer';
    main:
      if (howMany === undefined)
        howMay = initialElements.length;
      if (start === undefined)
        start = 0;
    post:
      this.count = initialElements.length;
      this.elems = initialElements.slice(start, howMany);
  }
  add(x){
    pre:
      typeof x === 'Integer';
    main:  
      if (this.count == this.elems.length){
        var b = new Array(this.elems.length);
        b.fill(0);
        this.elems = this.elems.concat(b);
      }
    post:
      this.elems[this.count] = x;
      this.count++;
  }
  removeMin(){
    pre:
      var m = Number.MAX_SAFE_INTEGER;
      var mindex = 0;
      for (var i = 0; i < this.count; i++){
        if(this.elems[i] < m){
          mindex = i;
          m = this.elems[i];
        }
      }
      this.count--;
      this.elems[mindex] = this.elems[this.count];
    main:
      return m;
    post:
      __result < Number.MAX_SAFE_INTEGER;
  }
  getCount(){
    pre:
      return this.count;
    post:
      __result > 0;
  }
  getElements{
    pre:
      return this.elems;
    post:
      Array.isArray(__result);
      __result.length > 0;
  }
}