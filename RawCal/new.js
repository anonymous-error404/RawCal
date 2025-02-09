function myfunction(){
   
    let length = document.getElementById("length").value; 
    let breadth = document.getElementById("breadth").value;  
    let flrs = document.getElementById("flrs").value;
    let s1 = document.getElementById("sb1").value;
    let s2 = document.getElementById("sb2").value;
    let s3 = document.getElementById("sb3").value; 
    let c1 = document.getElementById("clm1").value;
    let c2 = document.getElementById("clm2").value;  
    let c3 = document.getElementById("clm3").value;
    let b1 = document.getElementById("bm1").value;
    let b2 = document.getElementById("bm2").value; 
    let b3 = document.getElementById("bm3").value;
    let rcc_price = document.getElementById("rcc").value; 
    let steel_price = document.getElementById("steel").value;
    
    const op = document.getElementById("output2");
    

    let sb_pr_flr, clm_pr_flr, bm_pr_flr, sb_area, area, sv, cv, bv, svs, svc, svb, sws, swb, swc;
  
        area = length*breadth;
        sb_area = s1*s2;
        
        
        const a = length - c1;
        const b = breadth - c2;
        const  bm_by_len = Math.ceil(a/(parseFloat(b1)+parseFloat(c1)));
        const bm_by_brd = Math.ceil(b/(parseFloat(b1)+parseFloat(c2)));
  
        bm_pr_flr = bm_by_brd*(bm_by_len+1) + bm_by_len*(bm_by_brd+1);
  
        clm_pr_flr = (bm_by_brd+1)*(bm_by_len+1);
    
        sb_pr_flr = area/sb_area;
  
          sv=s1*s2*s3;
          const srcc = sv*2500;
    
          cv=c1*c2*c3;
          const crcc = cv*2500;
          
          bv=b1*b2*b3;
          const brcc = bv*2500;
          
          
          svs=sv*0.02;
          
          svc=0.025*cv;
          
          svb=0.02*bv;
          
          
          sws=svs*7850;
          
          swc=svc*7850;
          
          swb=svb*7850;
          
          
          const total_sb = flrs*sb_pr_flr;
          const total_clm = flrs*clm_pr_flr;
          const total_bm = flrs*bm_pr_flr;
  
          const total_rcc = parseFloat(total_sb*srcc) + parseFloat(total_bm*brcc) + parseFloat(total_clm*crcc);
          const total_steel = parseFloat(total_sb*sws) + parseFloat(total_bm*swb) + parseFloat(total_clm*swc);
  
          const total_rcc_cost = rcc_price*total_rcc;
  
          const total_steel_cost = steel_price*total_steel;

          const total = parseFloat(total_rcc_cost) + parseFloat(total_steel_cost);
          console.log(total);

             animateTotal(total, op);
}

function animateTotal(finalTotal, element) {
    let currentTotal = 0;
    const increment = Math.ceil(finalTotal / 100);  // Control speed of increment
    const interval = setInterval(() => {
        currentTotal += increment;
        if (currentTotal >= finalTotal) {
            currentTotal = finalTotal;
            clearInterval(interval);
        }
        element.innerText = "Total construction cost = ₹ " + currentTotal.toLocaleString();  // Adding commas for readability
    }, 30);  // Updates every 30ms

    const overlay = document.createElement("div");
            overlay.className = "overlay";
            overlay.innerText = "Total construction cost = ₹ " + finalTotal.toLocaleString();  // Overlay displays final total
            element.appendChild(overlay);
}

















