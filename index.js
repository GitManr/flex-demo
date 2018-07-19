window.onload = function () {
    // 执行代码
    $(".directionRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".directionContainer").css('flex-direction',e.target.value)

    })


    $(".wrapRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".wrapContainer").css('flex-wrap',e.target.value)

    })

    $(".justifyRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".justifyContainer").css('justify-content',e.target.value)

    })

    $(".alignRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".alignContainer").css('align-items',e.target.value)

    })

    $(".alignContentRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".alignContentContainer").css('align-content',e.target.value)

    })

    $(".growInput").on("blur","input",function(e){
        console.log(e.target.value,e.target.attributes.att.nodeValue)
        $(".grow span").eq(""+e.target.attributes.att.nodeValue-1+"").css('flex-grow',e.target.value)
        $(".grow span").eq(""+e.target.attributes.att.nodeValue-1+"").text(e.target.value)

    })

    $(".shrinkInput").on("blur","input",function(e){
        console.log(e.target.value,e.target.attributes.att.nodeValue)
        $(".shrink span").eq(""+e.target.attributes.att.nodeValue-1+"").css('flex-shrink',e.target.value);
        $(".shrink span").eq(""+e.target.attributes.att.nodeValue-1+"").text(e.target.value)
    })


    $(".selfRadio").on("click","input",function(e){
        console.log(e.target.value)
        $(".item3").css('align-self',e.target.value)

    })

    $(".orderInput").on("blur","input",function(e){
        console.log(e.target.value,e.target.attributes.att.nodeValue)
        $(".order span").eq(""+e.target.attributes.att.nodeValue-1+"").css('order',e.target.value);
        $(".order span").eq(""+e.target.attributes.att.nodeValue-1+"").text(e.target.value)

    })


    

    
}