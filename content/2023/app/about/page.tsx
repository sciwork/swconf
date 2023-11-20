import { Metadata } from 'next';
import teams from '@/configurations/teams';
import Article from '@/components/Article';
import Avatar from '@/components/Avatar';

export const metadata: Metadata = {
  title: 'About',
};

const Page = () => {
  return (
    <Article>
      {teams.map((subTeam) => (
        <>
          {subTeam.title && <h1>{subTeam.title}</h1>}
          <section className="tw-grid tw-grid-flow-row tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-justify-items-center tw-mb-16 xl:tw-mb-32">
            {subTeam.members.map((member) => (
              <Avatar
                key={member.name}
                image={member.image}
                name={member.name}
                email={member.email}
              />
            ))}
          </section>
        </>
      ))}
    </Article>
  );
};

export default Page;
