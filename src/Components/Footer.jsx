const Footer = () => {
  return (
    <div className="mt-14 bg-slate-100 p-10 max-w-screen-2xl mx-auto">
      <div className="w-4/5 mx-auto">
        <p className="text-3xl font-bold text-center mt-4">Gadget Heaven</p>
        <p className="text-center mt-3">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <p className="mt-5">
          <hr />
        </p>
      </div>

      <div className="w-1/2 mx-auto md:flex justify-between mt-5">
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Legal</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

