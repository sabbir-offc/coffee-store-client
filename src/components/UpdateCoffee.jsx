import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Coffee updated successfully.");
        }
      });
  };
  return (
    <div>
      <div className="container md:mx-auto my-10 bg-[#F4F3F0] p-5 md:p-16 lg:p-28">
        <h1 className="font-rancho text-5xl mb-8 text-[#374151] my-custom-text-shadow">
          Update Existing Coffee Details
        </h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className="mt-8" onSubmit={handleUpdate}>
          <div>
            {/* form row */}
            <div className="md:flex justify-around items-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="input  w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Enter available quantity"
                  className="input  w-full"
                />
              </div>
            </div>
            {/* form row */}
            <div className="md:flex justify-around items-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  name="supplier"
                  type="text"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="input  w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  name="taste"
                  type="text"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input  w-full"
                />
              </div>
            </div>
            {/* form row */}
            <div className="md:flex justify-around items-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  name="category"
                  type="text"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input  w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  name="details"
                  type="text"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input  w-full"
                />
              </div>
            </div>
            {/* form photo url */}
            <div className="md:flex justify-around items-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input  w-full "
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#D2B48C] text-[#331A15] font-rancho w-full py-2 rounded-md font-bold text-xl mt-4"
            >
              Update Coffee
            </button>
          </div>
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default UpdateCoffee;
