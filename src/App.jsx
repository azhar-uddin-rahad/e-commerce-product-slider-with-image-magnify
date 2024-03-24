import { useState } from "react";
import SliderOne from "./component/SiderOne/SliderOne";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ImageGallerySlider from "./component/ImageGallary/ImageGallerySlider";
function App() {
  const createRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/">
          <Route path="/" element={<SliderOne></SliderOne>}></Route>
        </Route>
        <Route path="/slider-gallery" element={<ImageGallerySlider></ImageGallerySlider>}></Route>
      </Route>
    )
  );
  
  return (
    <div>
        <RouterProvider router={createRoutes}></RouterProvider>
    </div>
  );
}

export default App;
