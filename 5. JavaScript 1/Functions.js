var func = function(){
    console.log("Hello world");
}

func();

function* generator(i) {

    yield i;
  
    yield i + 'b';
  
  }
  
  const gen = generator('a');
  
  console.log(gen.next().value);
  
  console.log(gen.next().value);
  
  console.log(gen.next().value);
