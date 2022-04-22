let list = $('.statusBox');
console.log(' Overall Staus : ',list);

for(itr of list){ 

  let anchor = $(" a",itr);    //remeber this way of selecting it helps in selecting a block inside particular element
  console.log(anchor);
  console.log('Ith val => ',itr);
  let imgObjNotDone =  `<img src='/image/updatedWrong.png' alt='NotDoneImg'>`;
  let imgObjDone =  `<img src='/image/right.jpg' alt='DoneImg'>`;
  let imgObjNone =  `<img src='/image/updatedNothing.png' alt='NoneImg'>`;

  let currobjStatus = $(itr).attr('data-cont');
  console.log(currobjStatus)
  if(currobjStatus=='None'){
    anchor.append(imgObjNone);  
  }
  else if(currobjStatus=='Done'){
    anchor.append(imgObjDone); 
  } 
  else{
    anchor.append(imgObjNotDone); 
  } 
}