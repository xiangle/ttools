const test = require('jtf')
const T = require('..')

let data = [
   {
      id: 553,
      b: [
         {
            kk: [
               {
                  oo: {
                     dd: [{
                        ss: 666,
                     }]
                  },
               },
               {
                  ss: {
                     dd: [
                        {
                           rr: 666,
                        },
                        {
                           yy: 666,
                        }
                     ]
                  },
                  jj: 888
               }
            ],
            xx: 666,
            ss: 888
         }
      ],
   },
   {
      id: 555,
      cid: 3,
      b: [{
         kk: [{
            ss: [{
               ss: 666,
            }],
         }],
         jj: 888,
         xx: 12
      }],
      oo: {
         o1: 99,
         o2: 81
      }
   },
   {
      id: 555,
      cid: 15,
      oo: {
         o1: 34,
         o2: 56
      }
   }
]


test.skip('set', t => {

   let result = T(data).set('0.b.0.kk.0.oo', 888)

   console.log(result)

   // console.log(result[0].b[0].kk[0].oo)

   // t.deepEqual({ dd: [{ ss: 666 }] }, result)

})


test.skip('set * 模糊查询', t => {

})