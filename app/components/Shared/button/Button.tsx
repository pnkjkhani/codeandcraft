const Button = () => {
  return (
    <button className="relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-48 h-auto group">
  <span className="circle relative block m-0 w-12 h-12 bg-[#323435] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
    <span className="icon absolute top-0 bottom-0 m-auto left-[0.625rem] w-[1.125rem] h-[0.125rem] bg-none group-hover:translate-x-4 transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]">
      <span className="absolute top-[-0.29rem] right-[0.0625rem] w-[0.625rem] h-[0.625rem] border-t-[0.125rem] border-r-[0.125rem] border-white rotate-45"></span>
    </span>
  </span>
  <span className="button-text absolute inset-0 py-3 ml-[1.85rem] text-[#323435] font-bold leading-6 text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
    Learn More
  </span>
</button>



  );
};

export default Button;
