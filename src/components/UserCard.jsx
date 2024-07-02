import PropTypes from "prop-types";

const UserCard = ({ user }) => (
  <div className="border-2 border-secondary p-4 rounded shadow-lg bg-white hover:bg-accent hover:text-white transition duration-300 ease-in-out">
    <h2 className="text-xl font-bold text-secondary">
      {user.firstName} {user.lastName}
    </h2>
    <p className="text-text">Email: {user.email}</p>
    <p className="text-text">Phone: {user.phone}</p>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
