// console.log(3);
// console.log('check if its working')

const ctx = document.getElementById('mychart').getContext('2d');

const mychart = new Chart(ctx,{
    type: 'line',
    data:{
        labels:['10sec','20sec','30sec','40sec','50sec','60sec','70sec','80sec','90sec','100sec','110sec','120sec','130sec','140sec'],
        datasets:[
            {
                data:[1,2,2,2.5,2,4,3,3,5,6,7,7,9,10],
                // backgroundColor: 'red',
                borderColor:"#00ff00",
                fill: false,
                pointRadius:0,
                borderWidth: 1.4
             // tension:0.3
            }
        ],
    },


    options:{
        scales:{
            y:{
                beginAtZero:true,
                 display:false
            },
            x:{
                 display:false
            }
        },
        
    plugins: {
        legend:{
            display:false
        }
    }
    }

});


const ctx2 = document.getElementById('mychartBox2').getContext('2d');

const myChart2 = new Chart (ctx2,{
    type:'line',
    data:{
        labels:['10sec','20sec','30sec','40sec','50sec','60sec','70sec','80sec','90sec','100sec','110sec','120sec','130sec','140sec'],
        datasets:[{
            data:[8.3,9,8,10,8,8,6,7,5,4,3.7,2,1],
            borderColor:'#ff5344ff',
            borderWidth:1.4,
            pointRadius:0
        }]
    },

    options:{
    scales:{
        y:{
            beginAtZero:true,
            display:false
        },
        x:{
            display:false
        }
    },
    plugins:{
        legend:{
            display:false
        }
    }
}
})
