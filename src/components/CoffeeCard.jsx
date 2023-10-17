import Swal from "sweetalert2";
import { GrView } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, taste, photo } = coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffe-store-server-bpldhrdui-mdsabbirhowlader420-gmailcom.vercel.app/coffee/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg shadow lg:flex-row md:max-w-xl">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={photo}
          alt=""
        />
        <div className="flex items-center justify-between w-full p-4">
          <div>
            <p className="mb-2 text-xl font-medium text-gray-700">
              Name: {name}
            </p>
            <p className="mb-2 text-xl font-medium text-gray-700">
              Available: {quantity}
            </p>
            <p className="mb-2 text-xl font-medium text-gray-700">
              Taste: {taste}
            </p>
          </div>

          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn bg-[#D2B48C] ">
              <GrView></GrView>
            </button>

            <Link
              to={`updateCoffee/${_id}`}
              className="btn text-white bg-[#3C393B]"
            >
              <MdEdit />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-[#EA4744]"
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};
export default CoffeeCard;
