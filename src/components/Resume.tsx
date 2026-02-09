import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education, workExperience, leadership, awards, volunteering } from '../data/personal';
import { Download, GraduationCap, Briefcase, Users, Award, Heart, MapPin, Mail, Phone, Globe } from 'lucide-react';
import exampleCV from 'figma:asset/186986f77d9f473a6d5dae3a978a1dcac5177560.png';

export function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                Resume
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                My Professional Journey
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => window.open(exampleCV, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Resume
              </Button>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {personalInfo.name}
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{personalInfo.title}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm">Portfolio Website</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              Education
            </h2>
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{education.institution}</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-2">{education.degree}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{education.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{education.timeline}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">GPA: {education.gpa}</p>
                  </div>
                </div>
                {education.honors && (
                  <div className="flex flex-wrap gap-2">
                    {education.honors.map((honor) => (
                      <Badge key={honor} className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                        {honor}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.programming.map((skill) => (
                      <Badge key={skill} className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.frameworks.concat(personalInfo.skills.design).map((skill) => (
                      <Badge key={skill} className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.position}</h3>
                          <p className="text-purple-600 dark:text-purple-400">{job.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{job.location}</p>
                        </div>
                        <Badge variant="outline" className="bg-white/5 dark:bg-black/5 mt-2 md:mt-0">
                          {job.timeline}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Involvement */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              Leadership & Involvement
            </h2>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={role.organization}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{role.position}</h3>
                          <p className="text-purple-600 dark:text-purple-400">{role.organization}</p>
                        </div>
                        <Badge variant="outline" className="bg-white/5 dark:bg-black/5 mt-2 md:mt-0">
                          {role.timeline}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{award.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{award.organization}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        {award.placement && (
                          <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
                            {award.placement}
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500 dark:text-gray-400">{award.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {personalInfo.languages.map((lang) => (
                    <div key={lang.language} className="text-center">
                      <p className="font-medium mb-1">{lang.language}</p>
                      <Badge 
                        variant="outline" 
                        className={`${
                          lang.proficiency === 'Native' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800' :
                          lang.proficiency === 'Proficient' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
                          lang.proficiency === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800' :
                          'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        {lang.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Volunteering */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
              Volunteering
            </h2>
            <div className="space-y-4">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.organization}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{vol.organization}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{vol.description}</p>
                        </div>
                        <Badge variant="outline" className="bg-white/5 dark:bg-black/5 mt-2 md:mt-0">
                          {vol.timeline}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="bg-white/5 dark:bg-black/5">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Other Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.other.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white/5 dark:bg-black/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}