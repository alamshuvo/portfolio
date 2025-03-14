import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      opacity: 1,
    })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 100,
        opacity: 0, // Fades out for a smoother transition
        stagger: 0.3, // Slightly longer stagger for a relaxed effect
        duration: 1.5, // Extends duration for a polished motion
        ease: "power4.out", // Creates a smooth, natural movement
      });
  }
};
