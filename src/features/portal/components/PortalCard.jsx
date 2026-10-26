/* eslint-disable react/prop-types */
import { ArrowUpRight, Store, GraduationCap, Vote, LayoutDashboard } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { Badge } from "../../../components/ui/Badges";
import { Button } from "../../../components/ui/Button";

const icons = {
  danus: Store,
  lms: GraduationCap,
  election: Vote,
  cms: LayoutDashboard,
};

const PortalCard = ({ platform, featured = false, style }) => {
  const Icon = icons[platform.id] || LayoutDashboard;

  return (
    <article
      style={style}
      className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fade-in-up ${
        featured ? "border-t-4 border-yellow-400" : ""
      }`}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4">
          <div className="p-3 bg-gray-100 rounded-full">
            <Icon className="h-6 w-6 text-gray-800" />
          </div>
          <Badge variant={platform.badgeVariant} rounded="full" size="sm">
            {platform.audience}
          </Badge>
        </div>

        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {platform.name}
        </h3>
        <Poppins className="mt-2 text-gray-600 flex-grow">
          {platform.description}
        </Poppins>
        <Poppins className="mt-3 text-sm text-gray-500">
          {platform.accessNote}
        </Poppins>

        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block"
        >
          <Button
            variant={featured ? "warning" : "primary"}
            size="md"
            rounded="full"
          >
            <span className="flex items-center gap-2 px-4">
              <span>Buka {platform.shortName}</span>
              <ArrowUpRight size={18} />
            </span>
          </Button>
        </a>
      </div>
    </article>
  );
};

export default PortalCard;
