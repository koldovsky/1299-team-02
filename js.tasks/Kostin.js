function lovefunc(flower1, flower2){
    flower1 %= 2;
    flower2 %= 2;
    if(flower1 != flower2){
      return true;
    }
    return false;
  }