// const Slider = () => {
//     return (
//         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//             <ol class="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div class="carousel-inner ">
//                 <div class="carousel-item active relative">
//                     <div className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] flex flex-col items-center text-white gap-4"><Button/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur perferendis optio earum qui ipsa nobis quos assumenda totam corporis impedit consequatur, dolores nesciunt nostrum aliquam necessitatibus nihil dolorem exercitationem est?</div>
//                     <img className="object-cover h-screen w-screen" src="Home/1 (1).jpeg" alt="First slide" />
//                     <div class="carousel-caption d-none d-md-block cursor-pointer">
//                         <h5 className="text-4xl bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md">TRUST</h5>
//                         <p className="text-lg">Trust is Our pride.</p>
//                     </div>
//                 </div>
//                 <div class="carousel-item relative">
//                 <div className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] flex flex-col items-center text-white gap-4"><Button/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias sequi a, eius provident autem numquam vero ducimus quas facilis voluptatem necessitatibus facere, veniam nisi unde dicta. Cupiditate, dolore earum?</div>
//                     <img className="object-cover h-screen w-screen" src="Home/1 (2).jpeg" alt="Second slide" />
//                     <div class="carousel-caption d-none d-md-block cursor-pointer">
//                         <h5 className="text-4xl bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md">BEST SERVICE</h5>
//                         <p className="text-lg">We provide best services</p>
//                     </div>
//                 </div>
//                 <div class="carousel-item relative">
//                 <div className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] flex flex-col items-center text-white gap-4"><Button/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem corporis commodi repudiandae explicabo fugiat suscipit, consectetur incidunt et! Officia delectus facilis labore doloribus qui enim! Illum laborum a facere.</div>
//                     <img className="object-cover h-screen w-screen" src="Home/1 (3).jpeg" alt="Third slide" />
//                     <div class="carousel-caption d-none d-md-block cursor-pointer">
//                         <h5 className="text-4xl bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md">BEST</h5>
//                         <p className="text-lg">We are best Car Agency.</p>
//                     </div>
//                 </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//         </div>

//     )
// }
// export default Slider





// const Button = () => {
//     return (
//       <a href="#" className="fancy relative inline-block text-white font-bold text-sm uppercase py-3 px-6 transition-all duration-300 hover:bg-black hover:text-white">
//         <span className="top-key absolute top-0 left-0 bg-white h-1 w-6 transition-all duration-300"></span>
//         <span className="text relative z-10">Read More</span>
//         <span className="bottom-key-1 absolute bottom-0 right-0 bg-white h-1 w-6 transition-all duration-300"></span>
//         <span className="bottom-key-2 absolute bottom-0 right-1 bg-white h-1 w-2 transition-all duration-300"></span>
//         <style jsx>{`
//           .fancy {
//             background-color: transparent;
//             border: 2px solid #fff;
//             border-radius: 0;
//             box-sizing: border-box;
//             color: #fff;
//             cursor: pointer;
//             display: inline-block;
//             font-weight: 700;
//             letter-spacing: 0.05em;
//             margin: 0;
//             outline: none;
//             overflow: visible;
//             padding: 1.25em 2em;
//             position: relative;
//             text-align: center;
//             text-decoration: none;
//             text-transform: uppercase;
//             transition: all 0.3s ease-in-out;
//             user-select: none;
//             font-size: 13px;
//           }
  
//           .fancy::before {
//             content: " ";
//             width: 1.5625rem;
//             height: 2px;
//             background: #fff;
//             top: 50%;
//             left: 1.5em;
//             position: absolute;
//             transform: translateY(-50%);
//             transform-origin: center;
//             transition: background 0.3s linear, width 0.3s linear;
//           }
  
//           .fancy .text {
//             font-size: 1.125em;
//             line-height: 1.33333em;
//             padding-left: 2em;
//             display: block;
//             text-align: left;
//             transition: all 0.3s ease-in-out;
//           }
  
//           .fancy .top-key,
//           .fancy .bottom-key-1,
//           .fancy .bottom-key-2 {
//             transition: all 0.3s ease-in-out;
//           }
  
//           .fancy:hover {
//             color: black;
//             background: white;
//           }
  
//           .fancy:hover::before {
//             width: 0.9375rem;
//             background: black;
//           }
  
//           .fancy:hover .text {
//             color: black;
//             padding-left: 1.5em;
//           }
  
//           .fancy:hover .top-key {
//             left: -2px;
//             width: 0px;
//           }
  
//           .fancy:hover .bottom-key-1,
//           .fancy:hover .bottom-key-2 {
//             right: 0;
//             width: 0;
//           }
//         `}</style>
//       </a>
//     );
//   };
  
  

  
  
  