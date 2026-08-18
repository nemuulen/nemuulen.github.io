import { motion } from 'motion/react';
import { personalInfo } from '../data/personal';
import { PenTool, ChefHat, Camera, Volleyball, Plane } from 'lucide-react';

const interests = [
  {
    name: 'Calligraphy',
    Icon: PenTool,
    blurb:
      'Learning Chinese characters by writing them turns out to be very different from learning them by reading. Calligraphy is where the structure of a character stops being abstract - you feel the stroke order and the balance of the radicals in your hand. It quietly informs how I think about RADIKAL.'
  },
  {
    name: 'Cooking',
    Icon: ChefHat,
    blurb:
      'Living between Mongolia and China means constantly rebuilding dishes from home with whatever is actually available. Cooking is the most forgiving kind of prototyping: fast feedback, low stakes, and the failures are still usually edible.'
  },
  {
    name: 'Photography',
    Icon: Camera,
    blurb:
      'Started shooting for the DKU Athletics Department and kept going. Sport photography teaches you to anticipate rather than react - by the time you see the moment through the viewfinder, you have already missed it.'
  },
  {
    name: 'Volleyball',
    Icon: Volleyball,
    blurb:
      'Played on the DKU Women\'s Volleyball varsity team. Volleyball is the least individual sport I know: no one touches the ball twice in a row, so every point depends entirely on trusting that someone else is where they said they would be.'
  },
  {
    name: 'Traveling',
    Icon: Plane,
    blurb:
      'Ulaanbaatar to Kunshan, with as many detours as the calendar allows. Being consistently the foreigner in the room is uncomfortable in a way that has been genuinely useful - it is the fastest route to noticing your own assumptions.'
  }
];

export function ForFun() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3">
            <span className="text-5xl md:text-6xl font-bold text-[#0F172A]">Just for </span>
            <span
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-[#012169] text-6xl md:text-7xl"
            >
              Fun
            </span>
          </h1>

          <p className="text-[#475569] max-w-2xl mx-auto">
            The things I do when I am not in front of a compiler. Most of them turn out to
            feed back into the work anyway.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {interests.map((interest, index) => {
            const { Icon } = interest;
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="border border-[#E2E8F0] rounded-2xl bg-white shadow-sm"
                style={{ padding: '1.25rem' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(1, 33, 105, 0.08)',
                    }}
                  >
                    <Icon className="w-5 h-5 text-[#012169]" />
                  </span>
                  <h2 className="text-lg font-bold text-[#0F172A]">{interest.name}</h2>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{interest.blurb}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-[#94A3B8] mb-3">ALSO SOMEWHERE ON THIS LIST</p>
          <div className="flex flex-wrap justify-center gap-2">
            {personalInfo.skills.languages.map((language) => (
              <span
                key={language}
                className="text-xs px-3 py-1.5 border border-[#E2E8F0] rounded-md text-[#475569]"
              >
                {language}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
