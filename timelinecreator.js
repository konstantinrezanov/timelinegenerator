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
}