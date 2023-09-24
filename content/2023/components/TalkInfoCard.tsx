import clsx from 'clsx';
import Button from '@/components/Button';
import { TalkType } from '@/models/Schedule';

type Props = {
  className?: string;
  talk: TalkType;
};

const TalkInfoCard = ({ className, talk, ...props }: Props) => {
  return (
    <div
      className={clsx(
        'tw-rounded-lg tw-bg-slate-100/[0.4] tw-p-6 tw-transition-shadow',
        className,
      )}
      {...props}
    >
      <div className="tw-my-2 tw-font-yk tw-text-2xl tw-font-medium tw-text-black">
        {talk.title}
      </div>
      <div className="tw-text-md tw-text-sky-600">
        {talk.persons.map((person) => person.publicName).join(', ')}
      </div>
      <div className="tw-text-sm tw-text-gray-500">
        {talk.start.format('HH:mm')}-{talk.end.format('HH:mm')} @ {talk.room}
      </div>
      <div
        className="tw-my-2 tw-line-clamp-3 tw-text-gray-700 tablet:tw-my-4"
        dangerouslySetInnerHTML={{ __html: talk.abstract }}
      />
      <div className="tw-mb-2 tw-mt-6">
        <Button variant="action" to={`/program/${talk.slug}`}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default TalkInfoCard;
