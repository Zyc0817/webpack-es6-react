/**
 * Created by jingdian on 2017/4/7.
 */
var React = require('react'), Body1;
Body1 = React.createClass({
    getInitialState:function(){
        return{
            user:[]
        }
    },
    render:function () {
        var _this = this;
        return <ul>
            {
                this.state.user.map(function (val, key) {
                    if(val.ads){
                        return <li key={key}>
                            {
                                val.ads.map(function(item, key1){
                                    return <div key={key1}>{item.title}<img src={item.imgsrc}/></div>
                                })
                            }
                        </li>
                    }
                    return <li key={key}>{val.title}<img src={val.imgsrc}/></li>
                })
            }
        </ul>
    },
    componentDidMount:function () {
        //请求数据
        var _this = this;
        $.ajax({
            url:"http://52wangyangyang.com/wangyiAPI/wangyi.php?type=head",
            type:"get",
            dataType:"jsonp",
            success:function(data){
                console.log(data);
                _this.setState({
                    user:data.T1348647853363
                });
                if(data){
                       var mySwiper = new Swiper ('.swiper-container', {
                           autoplay: 1000, //可选选项，自动滑动
                           initialSlide :1,
                           direction : 'horizontal',//横向//'vertical',纵向
                           speed:1000,
                           autoplayDisableOnInteraction : false,//我滑动之后,他还会自动滚动
                           paginationClickable :true,//按小点点是否跳转
                           loop : true,//大图滚动的效果,让4张图达到 4 1 2 3 4 1的效果
                           observer:true,//修改swiper自己或子元素时，自动初始化swiper
                           observeParents:true,//修改swiper的父元素时，自动初始化swiper
                       });
                }
            }
        });
    }
});
module.exports = Body1;
