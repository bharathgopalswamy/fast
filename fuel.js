function pricecalc()
{
  let a=document.querySelector("#display")
  let b=document.querySelector("#quantity")
  let c=document.querySelector("#price")
  var d=Number(a.value)
  var e=Number(b.value)
  c.innerHTML=(d*e)+100
}
function change1()
{
    var img=document.getElementById("image")
    img.src="petrol.jpg"
}
function change2()
{
    var img=document.getElementById("image")
    img.src="disel.jpg"
}function change3()
{
    var img=document.getElementById("image")
    img.src="cng.jpg"
}function change4()
{
    var img=document.getElementById("image")
    img.src="electric.jpg"
}
function submit()
{
    alert("Your order has been placed")
}