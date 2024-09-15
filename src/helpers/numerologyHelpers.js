// src/helpers/numerologyHelpers.js

export const getCareerAdvice = (lifePathNumber) => {
    switch (lifePathNumber) {
      case 1:
        return "leadership roles, entrepreneurship, and independent careers. Careers where you can be a decision-maker and have control over your path are ideal.";
      case 2:
        return "counseling, human resources, and roles requiring diplomacy. You excel in positions that involve collaboration and maintaining harmony.";
      case 3:
        return "creative arts, communication, and teaching. Roles that allow for self-expression and creativity are well-suited for you.";
      case 4:
        return "engineering, architecture, and project management. Careers that involve structure, organization, and detailed work are ideal.";
      case 5:
        return "sales, marketing, and roles involving travel and change. Careers that offer variety and freedom align with your adventurous spirit.";
      case 6:
        return "healthcare, education, and social services. Positions where you can nurture and care for others are a good fit for you.";
      case 7:
        return "research, science, and spiritual guidance. Careers that require deep thinking, analysis, and a quest for knowledge are suitable.";
      case 8:
        return "business, finance, and management. Roles that involve leadership, financial success, and strategic planning are well-suited for you.";
      case 9:
        return "non-profit work, humanitarian efforts, and social justice. Careers where you can make a positive impact on society align with your values.";
      case 11:
        return "creative arts, counseling, and visionary roles. Positions that allow for spiritual insight and inspiring others are ideal.";
      case 22:
        return "large-scale projects, global business, and leadership roles. Careers that involve making significant changes and achieving great things are well-suited.";
      default:
        return "Consider roles that align with your personal strengths and interests. Explore different fields to find what resonates with you.";
    }
  };

// src/helpers/numerologyHelpers.js

// src/helpers/numerologyHelpers.js

export const getRelationshipAdvice = (personalityNumber, soulUrgeNumber) => {
    const personalityAdvice = {
      1: "Take charge and lead in your relationships, but remember to also listen and value your partner’s input.",
      2: "Focus on creating harmony and understanding. Your diplomatic nature helps in resolving conflicts and building strong bonds.",
      3: "Be expressive and open with your emotions. Creativity and communication are key to nurturing your relationships.",
      4: "Build a stable and secure foundation. Your practical approach helps in maintaining long-term relationships.",
      5: "Embrace change and freedom in your relationships, but ensure that you also provide stability and commitment.",
      6: "Nurture and care for your partner. Your sense of responsibility and love will help strengthen your relationship.",
      7: "Respect each other’s need for personal space and introspection. Deep conversations and spiritual connections can enhance your bond.",
      8: "Balance your ambition with emotional connection. Work towards achieving mutual goals and providing support to each other.",
      9: "Focus on compassion and humanitarian efforts in your relationship. Your idealistic nature can help create a meaningful and supportive partnership.",
      11: "Seek spiritual and intellectual connection. Your visionary nature helps in creating a deep and inspiring relationship.",
      22: "Work together on ambitious goals and practical plans. Your ability to manifest significant achievements can be a strong foundation for your relationship."
    };
  
    const soulUrgeAdvice = {
      1: "Pursue personal independence and self-fulfillment in your relationships. Balance your need for freedom with commitment.",
      2: "Seek harmony and partnership. Your desire for cooperation and balance will enhance your relationships.",
      3: "Express your creativity and emotions openly. Your need for self-expression will strengthen your relationship.",
      4: "Build a solid and reliable relationship. Your inner drive for stability and order helps in creating a lasting bond.",
      5: "Enjoy freedom and variety in your relationship. Embrace change and new experiences together with your partner.",
      6: "Focus on nurturing and caring for each other. Your deep desire to create a loving and harmonious environment is key.",
      7: "Respect each other’s need for introspection and personal growth. Deep conversations and spiritual connections are important.",
      8: "Work towards mutual goals and support each other’s ambitions. Your inner drive for success can be a strong basis for the relationship.",
      9: "Embrace compassion and humanitarian efforts together. Your idealistic nature can lead to a meaningful and supportive relationship.",
      11: "Seek spiritual and visionary connections. Your desire for enlightenment can create a profound and inspiring relationship.",
      22: "Collaborate on achieving significant goals and practical plans. Your ability to manifest large-scale changes can be a strong foundation."
    };
  
    return `${personalityAdvice[personalityNumber]} Also, ${soulUrgeAdvice[soulUrgeNumber]}`;
  };

// src/helpers/numerologyHelpers.js

export const getLifePathSummary = (lifePathNumber) => {
    switch (lifePathNumber) {
      case 1:
        return "You are on a path of leadership and self-reliance. Embrace your individuality and drive for success.";
      case 2:
        return "Your path involves cooperation and partnership. Focus on building harmonious relationships and finding balance.";
      case 3:
        return "You are meant to express your creativity and communication skills. Pursue artistic and social endeavors.";
      case 4:
        return "Your path is one of hard work and building stability. Focus on creating a solid foundation and structured plans.";
      case 5:
        return "You are on a journey of adventure and freedom. Embrace change and explore new opportunities.";
      case 6:
        return "Your path involves nurturing and caring for others. Build strong, supportive relationships and contribute to your community.";
      case 7:
        return "You seek knowledge and spiritual growth. Focus on introspection and deep understanding of life’s mysteries.";
      case 8:
        return "Your path is one of achievement and material success. Work towards your goals with determination and leadership.";
      case 9:
        return "You are destined for humanitarian work and service. Strive to make a positive impact on the world.";
      case 11:
        return "Your path involves spiritual insight and visionary goals. Inspire others with your intuitive wisdom and purpose.";
      case 22:
        return "You are on a path of global impact and large-scale achievements. Manifest significant changes and lead with vision.";
      default:
        return "Your life path is unique. Focus on exploring and understanding your personal strengths and challenges.";
    }
  };

  
// src/helpers/numerologyHelpers.js

export const getStrengths = (lifePathNumber) => {
    switch (lifePathNumber) {
      case 1:
        return "Leadership, independence, determination, and innovation.";
      case 2:
        return "Diplomacy, sensitivity, cooperation, and peacemaking.";
      case 3:
        return "Creativity, communication, optimism, and social skills.";
      case 4:
        return "Organization, discipline, reliability, and practicality.";
      case 5:
        return "Adaptability, curiosity, freedom, and versatility.";
      case 6:
        return "Nurturing, responsibility, caring, and harmony.";
      case 7:
        return "Introspection, analysis, spirituality, and wisdom.";
      case 8:
        return "Ambition, authority, financial acumen, and strategic planning.";
      case 9:
        return "Compassion, humanitarianism, idealism, and service.";
      case 11:
        return "Vision, intuition, spirituality, and inspiration.";
      case 22:
        return "Mastery, practical achievements, leadership, and vision.";
      default:
        return "Your strengths are unique to your personal journey and experiences.";
    }
  };

// src/helpers/numerologyHelpers.js

export const getChallenges = (lifePathNumber) => {
    switch (lifePathNumber) {
      case 1:
        return "Overcoming tendencies towards arrogance and isolation. Learning to collaborate and value others’ input.";
      case 2:
        return "Dealing with indecision and dependency. Finding your own voice while maintaining harmony in relationships.";
      case 3:
        return "Avoiding self-indulgence and superficiality. Balancing creativity with practicality and focus.";
      case 4:
        return "Managing rigidity and fear of change. Embracing flexibility and adaptability in your plans.";
      case 5:
        return "Addressing restlessness and inconsistency. Finding balance between freedom and commitment.";
      case 6:
        return "Avoiding over-nurturing and self-sacrifice. Maintaining boundaries while caring for others.";
      case 7:
        return "Handling isolation and skepticism. Opening up to trust and connection with others.";
      case 8:
        return "Managing power struggles and materialism. Balancing ambition with ethical considerations and personal values.";
      case 9:
        return "Avoiding idealism and disillusionment. Staying grounded while pursuing humanitarian goals.";
      case 11:
        return "Addressing anxiety and self-doubt. Embracing your intuitive abilities and visionary goals with confidence.";
      case 22:
        return "Managing overwhelm and high expectations. Balancing grand ambitions with practical steps and self-care.";
      default:
        return "Your challenges are specific to your personal path. Focus on areas that need growth and development.";
    }
  };
  