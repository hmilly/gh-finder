import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="mb-2 rounded-md bg-gray-800 hover:bg-gray-900 max-w-xs">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url}>
            <FaLink className="inline mr-1" />
            {repo.name}
          </a>
        </h3>
        <p className="mb-3">{repo.description}</p>
        <div>
        <div className="mr-2 badge badge-info badge-md">
          <FaEye className="mr-2" />
          {repo.watchers_count}
        </div>
        <div className="mr-2 badge badge-success badge-md">
          <FaStar className="mr-2" />
          {repo.stargazers_count}
        </div>
        <div className="mr-2 badge badge-error badge-md">
          <FaInfo className="mr-2" />
          {repo.open_issues}
        </div>
        <div className="mr-2 badge badge-warning badge-md">
          <FaUtensils className="mr-2" />
          {repo.forks}
        </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;

RepoItem.protoTypes = {
  repo: PropTypes.object.isRequired,
};
