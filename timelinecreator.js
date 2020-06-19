function createTimeline(obj) {
    let points=obj.getElementsByClassName('time-point')
    for (let i=0; i<points.length; i++) {
        let black=document.createElement('div')
        black.className="point-of-time"
        points[i].insertBefore(black, points[i].childNodes[0])
        let content=points[i].getElementsByClassName('time-content')[0]
        let offset=content.offsetWidth
        points[i].style.marginLeft=`${offset}px`
    }
    let years=obj.getElementsByClassName('time-year')
    for (i=0; i<years.length; i++) {
        years[i].style.paddingLeft=`${years[i].offsetWidth+8}px`
    }
}