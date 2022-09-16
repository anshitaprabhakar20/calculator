let number_btn=document.querySelectorAll(".number");
let operation_btn=document.querySelectorAll(".operation");
let allclear_btn=document.querySelector(".allclear");
let delete_btn=document.querySelector(".delete");
let equal_btn=document.querySelector(".equal");
let temp_result=document.querySelector(".temp_result")
let previous_operand=document.querySelector(".previous-operand");
let current_operand=document.querySelector(".current-operand");
var toggle=document.querySelector("#toggle");
let dis1num='';
let dis2num='';
let result=null
let last_operation='';
let have_dot=false;
var flag=0;
number_btn.forEach(function(number){
    number.addEventListener("click",function(dets){
        if(dets.target.innerText ==='.' && !have_dot)
        {
           have_dot=true;
        }
        else if(dets.target.innerText ==='.' && have_dot)
        {
           return;
        }
        dis2num +=dets.target.innerText;
        current_operand.innerText= dis2num;
    });
});
operation_btn.forEach(function(val){
    val.addEventListener("click",function(e){
        console.log(e.target);
        if(!dis2num) return;
        have_dot=false;
        let operator_name = e.target.innerText;
        console.log(operator_name);
        if(dis1num && dis2num && last_operation)
        {
          math_operation();
        }
        else
        {
          result=parseFloat(dis2num);
        }
        clearVar(operator_name);
        last_operation=operator_name;
        console.log(result);
    });
});
function clearVar(name = ''){
     dis1num += dis2num+ ' '  + name + ' ';
     previous_operand.innerText=dis1num;
     current_operand.innerText='';
     dis2num='';
     temp_result.innerText=result;
}
function math_operation(){
  if(last_operation === '*')
  {
      result = parseFloat(result) *  parseFloat(dis2num);
  }
  else if(last_operation === '+')
  {
      result = parseFloat(result) +  parseFloat(dis2num);
  }
  else if(last_operation === '-')
  {
      result = parseFloat(result) -  parseFloat(dis2num);
  }
  else if(last_operation === '/')
  {
      result = parseFloat(result) /  parseFloat(dis2num);
  }
  else if(last_operation === '%')
  {
      result = parseFloat(result) %  parseFloat(dis2num);
  }
}
equal_btn.addEventListener("click",function(dets){
    if(!dis1num || !dis2num) return;
    have_dot =false;
    math_operation();
    clearVar();
    current_operand.innerText=result;
    temp_result.innerText='';
    dis2num=result;
    dis1num='';
})
allclear_btn.addEventListener("click",function(dets){
    current_operand.innerText='00';
    previous_operand.innerText='0';
    dis1num='';
    dis2num='';
    result='';
    temp_result.innerText='0';
})
delete_btn.addEventListener("click",function(dets){
    current_operand.innerText='00';
    dis2num='';
})
window.addEventListener("keydown",function(dets){
    console.log(dets.key);
    if(dets.key === '0'|| dets.key ==='1' || dets.key ==='2' || dets.key ==='3' || dets.key ==='4' || dets.key ==='5' || dets.key ==='6' || dets.key ==='7' || dets.key ==='8' || dets.key ==='9' || dets.key ==='.')
    {
        clickNumber(dets.key);
    }
    else if(dets.key === '*'|| dets.key === '/'|| dets.key === '+'|| dets.key === '-'|| dets.key === '%')
    {
        clickOperator(dets.key);
    }
    else if(dets.key === 'Enter' || dets.key === '=')
    {
        clickEqual(dets.key);
    }
});
function clickNumber(key){
   number_btn.forEach(function(val){
       if(val.innerText === key)
       {
          val.click();
       }
   })
} 
function clickOperator(key){
    operation_btn.forEach(function(val){
        if(val.innerText === key)
        {
            val.click();
        }
    })
}
function clickEqual(key){
    equal_btn.click();
}
toggle.addEventListener("click",function(){
    if(flag === 0)
    {
      document.querySelector("#cir").style.left="60%";   
      document.querySelector("#cir").style.backgroundColor="white";   
      document.querySelector("#container").style.backgroundColor="black"; 
      document.querySelector("#display").style.color="white";
      delete_btn.style.backgroundColor="#ff7f50cc";
      operation_btn.forEach(function(val){
          val.style.backgroundColor="pink";
      })
      flag=1;
    } 
    else
    {
        document.querySelector("#cir").style.left="0%";  
        document.querySelector("#cir").style.backgroundColor="black";   
        document.querySelector("#container").style.backgroundColor="white"; 
        document.querySelector("#display").style.color="black";  
        delete_btn.style.backgroundColor="#00808098";
        operation_btn.forEach(function(val){
            val.style.backgroundColor="rgba(152, 251, 152, 0.804)";
        })
        flag=0;
    }
});