const plantCareData=[
  
    {
      "name": "Aloe Vera",
      "light": "Full sun to partial shade",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Aloe Vera is a succulent, so it needs minimal water. Let the soil dry out completely before watering."
    },
    {
      "name": "Spider Plant",
      "light": "Bright, indirect light",
      "water": "Water every 1-2 weeks",
      "soil": "Well-draining potting mix",
      "temperature": "60-75°F (15-24°C)",
      "humidity": "Medium",
      "care_tips": "Water when the top inch of soil is dry. It is an easy-to-care-for plant that thrives in indirect light."
    },
    {
      "name": "Snake Plant",
      "light": "Low to bright indirect light",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "70-90°F (21-32°C)",
      "humidity": "Low to medium",
      "care_tips": "Snake plants are tolerant of neglect and can survive with minimal watering. Let the soil dry out between waterings."
    },
    {
      "name": "Peace Lily",
      "light": "Low to moderate light",
      "water": "Water weekly",
      "soil": "Well-draining, moist soil",
      "temperature": "65-80°F (18-27°C)",
      "humidity": "Medium to high",
      "care_tips": "Peace lilies like a lot of moisture but can tolerate dry spells. Keep the soil consistently moist but not soggy."
    },
    {
      "name": "Basil",
      "light": "Full sun",
      "water": "Water regularly, keep soil moist",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Medium",
      "care_tips": "Basil thrives in warm, sunny environments. Make sure to water it regularly, especially during hot weather."
    },
    {
      "name": "Rose",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Medium",
      "care_tips": "Roses need at least 6 hours of direct sunlight each day. Prune dead blooms regularly to encourage new growth."
    },
    {
      "name": "Cactus",
      "light": "Full sun",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "70-95°F (21-35°C)",
      "humidity": "Low",
      "care_tips": "Cacti require minimal water. Let the soil dry out completely between watering."
    },
    {
      "name": "Lavender",
      "light": "Full sun",
      "water": "Water weekly, allow soil to dry out between waterings",
      "soil": "Well-draining, sandy soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Low to medium",
      "care_tips": "Lavender prefers dry, well-drained soil and should not be overwatered. It thrives in full sunlight."
    },
    {
      "name": "Mint",
      "light": "Partial sun to full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Moist, well-draining soil",
      "temperature": "65-70°F (18-21°C)",
      "humidity": "Medium",
      "care_tips": "Mint grows best in partial shade and moist conditions. It can be invasive, so keep it in a container."
    },
    {
      "name": "Tomato",
      "light": "Full sun",
      "water": "Water consistently to keep the soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Tomatoes need at least 6 hours of direct sunlight per day. Ensure consistent watering, especially during flowering and fruiting."
    },
    {
      "name": "Geranium",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, fertile soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Geraniums prefer full sun and dry soil. Allow the soil to dry out between waterings to avoid root rot."
    },
    {
      "name": "Marigold",
      "light": "Full sun",
      "water": "Water regularly, allowing soil to dry between waterings",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-75°F (21-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Marigolds thrive in full sun and need well-drained soil. They are low-maintenance and need regular watering."
    },
    {
      "name": "Zinnia",
      "light": "Full sun",
      "water": "Water regularly, but not excessively",
      "soil": "Well-draining, moderately rich soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Zinnias love full sun and will bloom best with regular watering. Be careful not to overwater."
    },
    {
      "name": "Aloe Vera",
      "light": "Bright indirect light",
      "water": "Water once every 2-3 weeks",
      "soil": "Sandy, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low",
      "care_tips": "Let the soil dry out completely between watering. Aloe Vera is very tolerant of drought conditions."
    },
    {
      "name": "Ficus",
      "light": "Bright, indirect light",
      "water": "Water when the top inch of soil is dry",
      "soil": "Well-draining soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Medium to high",
      "care_tips": "Ficus prefers bright, indirect light and should not be overwatered. Let the soil dry slightly before watering."
    },
    {
      "name": "Bamboo",
      "light": "Partial to full sun",
      "water": "Keep soil consistently moist",
      "soil": "Well-draining soil",
      "temperature": "60-80°F (16-27°C)",
      "humidity": "Medium to high",
      "care_tips": "Bamboo requires consistent moisture and prefers indirect sunlight."
    },
    {
      "name": "Pothos",
      "light": "Low to medium light",
      "water": "Water every 1-2 weeks",
      "soil": "Well-draining soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Pothos is a low-maintenance plant that thrives in indirect light. Let the soil dry out before watering."
    },
    {
      "name": "Orchid",
      "light": "Bright, indirect light",
      "water": "Water once a week",
      "soil": "Special orchid mix with good drainage",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "High",
      "care_tips": "Orchids need high humidity and bright indirect light. Water once a week and ensure proper drainage."
    },
    {
      "name": "Begonia",
      "light": "Bright, indirect light",
      "water": "Water when the top soil is dry",
      "soil": "Well-draining potting mix",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "High",
      "care_tips": "Begonias like high humidity and do best in indirect sunlight. Keep soil consistently moist."
    },
    {
      "name": "Cress",
      "light": "Full sun",
      "water": "Keep soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Medium",
      "care_tips": "Cress grows quickly in full sunlight and needs regular watering to keep the soil moist."
    },
    {
      "name": "Chili Pepper",
      "light": "Full sun",
      "water": "Water regularly, but allow soil to dry slightly between waterings",
      "soil": "Well-draining, fertile soil",
      "temperature": "75-85°F (24-29°C)",
      "humidity": "Medium",
      "care_tips": "Chili peppers thrive in hot climates and need consistent watering for optimal growth."
    },
    {
      "name": "Lavender",
      "light": "Full sun",
      "water": "Water weekly, allow soil to dry out between waterings",
      "soil": "Well-draining, sandy soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Low to medium",
      "care_tips": "Lavender prefers dry, well-drained soil and should not be overwatered. It thrives in full sunlight."
    },
    {
      "name": "Mint",
      "light": "Partial sun to full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Moist, well-draining soil",
      "temperature": "65-70°F (18-21°C)",
      "humidity": "Medium",
      "care_tips": "Mint grows best in partial shade and moist conditions. It can be invasive, so keep it in a container."
    },
    {
      "name": "Zucchini",
      "light": "Full sun",
      "water": "Water consistently",
      "soil": "Fertile, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Zucchini needs a lot of sunlight and regular watering to grow. Keep the soil moist but not soggy."
    },
    {
      "name": "Cucumber",
      "light": "Full sun",
      "water": "Water consistently",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-90°F (21-32°C)",
      "humidity": "Medium",
      "care_tips": "Cucumbers thrive in full sun and need consistent moisture to grow. Mulching helps retain moisture."
    },
{
      "name": "Aloe Vera",
      "light": "Full sun to partial shade",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Aloe Vera is a succulent, so it needs minimal water. Let the soil dry out completely before watering."
    },
    {
      "name": "Spider Plant",
      "light": "Bright, indirect light",
      "water": "Water every 1-2 weeks",
      "soil": "Well-draining potting mix",
      "temperature": "60-75°F (15-24°C)",
      "humidity": "Medium",
      "care_tips": "Water when the top inch of soil is dry. It is an easy-to-care-for plant that thrives in indirect light."
    },
    {
      "name": "Snake Plant",
      "light": "Low to bright indirect light",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "70-90°F (21-32°C)",
      "humidity": "Low to medium",
      "care_tips": "Snake plants are tolerant of neglect and can survive with minimal watering. Let the soil dry out between waterings."
    },
    {
      "name": "Peace Lily",
      "light": "Low to moderate light",
      "water": "Water weekly",
      "soil": "Well-draining, moist soil",
      "temperature": "65-80°F (18-27°C)",
      "humidity": "Medium to high",
      "care_tips": "Peace lilies like a lot of moisture but can tolerate dry spells. Keep the soil consistently moist but not soggy."
    },
    {
      "name": "Basil",
      "light": "Full sun",
      "water": "Water regularly, keep soil moist",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Medium",
      "care_tips": "Basil thrives in warm, sunny environments. Make sure to water it regularly, especially during hot weather."
    },
    {
      "name": "Rose",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Medium",
      "care_tips": "Roses need at least 6 hours of direct sunlight each day. Prune dead blooms regularly to encourage new growth."
    },
    {
      "name": "Cactus",
      "light": "Full sun",
      "water": "Water every 2-3 weeks",
      "soil": "Well-draining soil",
      "temperature": "70-95°F (21-35°C)",
      "humidity": "Low",
      "care_tips": "Cacti require minimal water. Let the soil dry out completely between watering."
    },
    {
      "name": "Lavender",
      "light": "Full sun",
      "water": "Water weekly, allow soil to dry out between waterings",
      "soil": "Well-draining, sandy soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Low to medium",
      "care_tips": "Lavender prefers dry, well-drained soil and should not be overwatered. It thrives in full sunlight."
    },
    {
      "name": "Mint",
      "light": "Partial sun to full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Moist, well-draining soil",
      "temperature": "65-70°F (18-21°C)",
      "humidity": "Medium",
      "care_tips": "Mint grows best in partial shade and moist conditions. It can be invasive, so keep it in a container."
    },
    {
      "name": "Tomato",
      "light": "Full sun",
      "water": "Water consistently to keep the soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Tomatoes need at least 6 hours of direct sunlight per day. Ensure consistent watering, especially during flowering and fruiting."
    },
    {
      "name": "Geranium",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, fertile soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Geraniums prefer full sun and dry soil. Allow the soil to dry out between waterings to avoid root rot."
    },
    {
      "name": "Marigold",
      "light": "Full sun",
      "water": "Water regularly, allowing soil to dry between waterings",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-75°F (21-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Marigolds thrive in full sun and need well-drained soil. They are low-maintenance and need regular watering."
    },
    {
      "name": "Zinnia",
      "light": "Full sun",
      "water": "Water regularly, but not excessively",
      "soil": "Well-draining, moderately rich soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Zinnias love full sun and will bloom best with regular watering. Be careful not to overwater."
    },
    {
      "name": "Aloe Vera",
      "light": "Bright indirect light",
      "water": "Water once every 2-3 weeks",
      "soil": "Sandy, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low",
      "care_tips": "Let the soil dry out completely between watering. Aloe Vera is very tolerant of drought conditions."
    },
    {
      "name": "Ficus",
      "light": "Bright, indirect light",
      "water": "Water when the top inch of soil is dry",
      "soil": "Well-draining soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Medium to high",
      "care_tips": "Ficus prefers bright, indirect light and should not be overwatered. Let the soil dry slightly before watering."
    },
    {
      "name": "Bamboo",
      "light": "Partial to full sun",
      "water": "Keep soil consistently moist",
      "soil": "Well-draining soil",
      "temperature": "60-80°F (16-27°C)",
      "humidity": "Medium to high",
      "care_tips": "Bamboo requires consistent moisture and prefers indirect sunlight."
    },
    {
      "name": "Pothos",
      "light": "Low to medium light",
      "water": "Water every 1-2 weeks",
      "soil": "Well-draining soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Pothos is a low-maintenance plant that thrives in indirect light. Let the soil dry out before watering."
    },
    {
      "name": "Orchid",
      "light": "Bright, indirect light",
      "water": "Water once a week",
      "soil": "Special orchid mix with good drainage",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "High",
      "care_tips": "Orchids need high humidity and bright indirect light. Water once a week and ensure proper drainage."
    },
    {
      "name": "Begonia",
      "light": "Bright, indirect light",
      "water": "Water when the top soil is dry",
      "soil": "Well-draining potting mix",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "High",
      "care_tips": "Begonias like high humidity and do best in indirect sunlight. Keep soil consistently moist."
    },
    {
      "name": "Cress",
      "light": "Full sun",
      "water": "Keep soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-75°F (16-24°C)",
      "humidity": "Medium",
      "care_tips": "Cress grows quickly in full sunlight and needs regular watering to keep the soil moist."
    },
    {
      "name": "Chili Pepper",
      "light": "Full sun",
      "water": "Water regularly, but allow soil to dry slightly between waterings",
      "soil": "Well-draining, fertile soil",
      "temperature": "75-85°F (24-29°C)",
      "humidity": "Medium",
      "care_tips": "Chili peppers thrive in hot climates and need consistent watering for optimal growth."
    },
    {
      "name": "Lavender",
      "light": "Full sun",
      "water": "Water weekly, allow soil to dry out between waterings",
      "soil": "Well-draining, sandy soil",
      "temperature": "70-80°F (21-27°C)",
      "humidity": "Low to medium",
      "care_tips": "Lavender prefers dry, well-drained soil and should not be overwatered. It thrives in full sunlight."
    },
    {
      "name": "Mint",
      "light": "Partial sun to full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Moist, well-draining soil",
      "temperature": "65-70°F (18-21°C)",
      "humidity": "Medium",
      "care_tips": "Mint grows best in partial shade and moist conditions. It can be invasive, so keep it in a container."
    },
    {
      "name": "Zucchini",
      "light": "Full sun",
      "water": "Water consistently",
      "soil": "Fertile, well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Zucchini needs a lot of sunlight and regular watering to grow. Keep the soil moist but not soggy."
    },
    {
      "name": "Cucumber",
      "light": "Full sun",
      "water": "Water consistently",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-90°F (21-32°C)",
      "humidity": "Medium",
      "care_tips": "Cucumbers thrive in full sun and need consistent moisture to grow. Mulching helps retain moisture."
    },
{
      "name": "Lily",
      "light": "Full sun to partial shade",
      "water": "Water regularly to keep the soil moist",
      "soil": "Well-draining, slightly acidic to neutral soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Lilies need well-drained soil and moderate watering. Remove dead flowers to encourage more blooms."
    },
    {
      "name": "Lotus",
      "light": "Full sun",
      "water": "Water regularly, keep the roots submerged",
      "soil": "Mud, rich in organic matter",
      "temperature": "75-85°F (24-29°C)",
      "humidity": "Medium to high",
      "care_tips": "Lotuses require full sunlight and their roots must be submerged in water. Provide a shallow pond or container with deep, rich soil."
    },
    {
      "name": "Rose",
      "light": "Full sun",
      "water": "Water regularly to keep the soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Roses need full sun and well-drained soil. Prune regularly to promote healthy growth and remove dead flowers."
    },
    {
      "name": "Tulip",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, sandy soil",
      "temperature": "50-60°F (10-15°C)",
      "humidity": "Medium",
      "care_tips": "Tulips need full sunlight and well-drained soil. Once the flowers fade, allow the leaves to die naturally before cutting."
    },
    {
      "name": "Daffodil",
      "light": "Full sun to partial shade",
      "water": "Water regularly to keep soil moist but not soggy",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "50-60°F (10-15°C)",
      "humidity": "Medium",
      "care_tips": "Daffodils prefer well-drained soil and moderate watering. Avoid overwatering to prevent bulb rot."
    },
    {
      "name": "Orchid",
      "light": "Indirect light",
      "water": "Water weekly, allowing the soil to dry out between waterings",
      "soil": "Well-draining orchid potting mix",
      "temperature": "65-80°F (18-27°C)",
      "humidity": "High",
      "care_tips": "Orchids thrive in high humidity and indirect light. Avoid overwatering and allow soil to dry between waterings."
    },
    {
      "name": "Jasmine",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, loamy soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium to high",
      "care_tips": "Jasmine plants thrive in full sun and well-drained soil. Regular pruning can encourage more blooms."
    },
    {
      "name": "Geranium",
      "light": "Full sun",
      "water": "Water when the topsoil is dry",
      "soil": "Well-draining, fertile soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Geraniums require full sunlight and moderate watering. Deadhead spent flowers to encourage continuous blooms."
    },
    {
      "name": "Chrysanthemum",
      "light": "Full sun",
      "water": "Water regularly to keep the soil moist",
      "soil": "Well-draining, rich soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Chrysanthemums need plenty of sunlight and rich soil. Regularly remove dead flowers to encourage new blooms."
    },
    {
      "name": "Sunflower",
      "light": "Full sun",
      "water": "Water regularly, especially during dry spells",
      "soil": "Well-draining, moderately fertile soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Sunflowers thrive in full sun and require consistent watering. Stake tall varieties to prevent them from falling over."
    },
    {
      "name": "Violet",
      "light": "Partial shade",
      "water": "Water when the soil is dry to the touch",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "60-75°F (15-24°C)",
      "humidity": "Medium",
      "care_tips": "Violets prefer indirect light and slightly acidic soil. Water them consistently, but avoid wetting the leaves."
    },
    {
      "name": "Hydrangea",
      "light": "Partial to full sun",
      "water": "Water regularly to keep the soil moist",
      "soil": "Moist, well-draining, slightly acidic soil",
      "temperature": "60-75°F (15-24°C)",
      "humidity": "Medium to high",
      "care_tips": "Hydrangeas need consistent moisture and partial to full sunlight. Prune after blooming to maintain their shape."
    },
    {
      "name": "Carnation",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, fertile soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Carnations thrive in full sun and well-drained soil. Prune regularly to encourage more blooms and remove dead flowers."
    },
    {
      "name": "Bougainvillea",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, sandy soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Medium",
      "care_tips": "Bougainvillea thrives in full sun and well-drained soil. Water sparingly and prune to control size and encourage more blooms."
    },
    {
      "name": "Freesia",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, loamy soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Freesias require well-drained soil and regular watering. After flowering, let the plant rest before watering again."
    },
    {
      "name": "Tulip",
      "light": "Full sun",
      "water": "Water when the soil is dry",
      "soil": "Well-draining, sandy soil",
      "temperature": "50-60°F (10-15°C)",
      "humidity": "Medium",
      "care_tips": "Tulips need full sunlight and well-drained soil. Once the flowers fade, allow the leaves to die naturally before cutting."
    },
    {
      "name": "Poppy",
      "light": "Full sun",
      "water": "Water when soil is dry",
      "soil": "Well-draining, light soil",
      "temperature": "55-70°F (13-21°C)",
      "humidity": "Low",
      "care_tips": "Poppies thrive in full sun and need minimal water. Deadhead spent flowers to prevent self-seeding."
    },
    {
      "name": "Hibiscus",
      "light": "Full sun",
      "water": "Water regularly, keep soil moist",
      "soil": "Well-draining, fertile soil",
      "temperature": "65-80°F (18-27°C)",
      "humidity": "Medium to high",
      "care_tips": "Hibiscus needs full sun and well-drained soil. Keep the soil consistently moist but not soggy, especially during hot weather."
    },
    {
      "name": "Begonia",
      "light": "Indirect sunlight",
      "water": "Water when the topsoil is dry",
      "soil": "Well-draining, fertile soil",
      "temperature": "60-75°F (15-24°C)",
      "humidity": "Medium",
      "care_tips": "Begonias prefer indirect sunlight and regular watering. They thrive in well-drained soil and may need occasional pruning."
    },
    {
      "name": "Aster",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, moderately fertile soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Asters prefer full sun and well-drained soil. Regular watering is essential, especially during dry spells."
    },
    {
      "name": "Calla Lily",
      "light": "Full sun to partial shade",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Calla lilies thrive in well-drained soil and moderate watering. Prune spent flowers and leaves to encourage fresh growth."
    },
{
      "name": "Cherry",
      "light": "Full sun",
      "water": "Water deeply, especially during dry periods",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "55-75°F (13-24°C)",
      "humidity": "Low to medium",
      "care_tips": "Cherries need plenty of sunlight and well-drained soil. Prune after fruiting to encourage new growth."
    },
    {
      "name": "Strawberry",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "60-80°F (16-27°C)",
      "humidity": "Medium",
      "care_tips": "Strawberries thrive in full sun and need consistent moisture. Mulching can help retain moisture and reduce weeds."
    },
    {
      "name": "Apple",
      "light": "Full sun",
      "water": "Water deeply, 1-2 times per week",
      "soil": "Well-draining, loamy soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Apples need at least 6 hours of sunlight. Ensure proper air circulation and prune to maintain shape."
    },
    {
      "name": "Peach",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Well-draining, loamy soil",
      "temperature": "70-75°F (21-24°C)",
      "humidity": "Medium",
      "care_tips": "Peach trees need full sun and well-drained soil. Prune regularly to remove dead or diseased wood."
    },
    {
      "name": "Plum",
      "light": "Full sun",
      "water": "Water deeply, especially during dry periods",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Plums require full sun and well-drained soil. Prune after fruiting to keep the tree healthy."
    },
    {
      "name": "Grape",
      "light": "Full sun",
      "water": "Water deeply during dry periods",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Grapes need full sunlight and well-drained soil. Prune regularly to maintain growth and avoid disease."
    },
    {
      "name": "Blueberry",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Acidic, well-draining soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Blueberries need acidic soil and full sun. Keep the soil consistently moist, but not soggy."
    },
    {
      "name": "Fig",
      "light": "Full sun",
      "water": "Water deeply, but allow soil to dry between waterings",
      "soil": "Well-draining soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Low to medium",
      "care_tips": "Figs need full sun and well-drained soil. They are drought-tolerant once established."
    },
    {
      "name": "Raspberry",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, fertile soil",
      "temperature": "65-75°F (18-24°C)",
      "humidity": "Medium",
      "care_tips": "Raspberries need full sunlight and consistent moisture. Prune after harvest to maintain plant health."
    },
    {
      "name": "Blackberry",
      "light": "Full sun",
      "water": "Water consistently to keep soil moist",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-75°F (21-24°C)",
      "humidity": "Medium",
      "care_tips": "Blackberries need full sun and consistent moisture. Prune after fruiting to encourage new growth."
    },
    {
      "name": "Kiwi",
      "light": "Full sun",
      "water": "Water regularly, but do not overwater",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Medium",
      "care_tips": "Kiwi vines need a lot of sun and well-drained soil. Make sure to provide a strong trellis for support."
    },
    {
      "name": "Avocado",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Well-draining soil",
      "temperature": "60-85°F (16-29°C)",
      "humidity": "Medium",
      "care_tips": "Avocados need plenty of sunlight and well-drained soil. Be careful not to overwater as root rot is common."
    },
    {
      "name": "Mango",
      "light": "Full sun",
      "water": "Water deeply, especially during dry periods",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Mango trees need full sun and well-drained soil. Water deeply but let the soil dry between waterings."
    },
    {
      "name": "Pineapple",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Well-draining, sandy soil",
      "temperature": "65-85°F (18-29°C)",
      "humidity": "Medium",
      "care_tips": "Pineapples thrive in full sunlight and need regular watering, but they prefer dry soil between waterings."
    },
    {
      "name": "Lemon",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Lemon trees need plenty of sunlight and consistent watering. Prune after fruiting to encourage new growth."
    },
    {
      "name": "Lime",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Well-draining, slightly acidic soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Lime trees need full sun and well-drained soil. Ensure regular watering, especially during hot weather."
    },
    {
      "name": "Cantaloupe",
      "light": "Full sun",
      "water": "Water consistently, keep soil moist",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Cantaloupes need full sunlight and regular watering. Mulch around the base to help retain moisture."
    },
    {
      "name": "Watermelon",
      "light": "Full sun",
      "water": "Water deeply once a week",
      "soil": "Well-draining, fertile soil",
      "temperature": "75-85°F (24-29°C)",
      "humidity": "Medium",
      "care_tips": "Watermelons require consistent watering and full sunlight. Be sure to keep the soil moist but not soggy."
    },
    {
      "name": "Pumpkin",
      "light": "Full sun",
      "water": "Water consistently, especially during flowering and fruiting",
      "soil": "Well-draining, fertile soil",
      "temperature": "70-85°F (21-29°C)",
      "humidity": "Medium",
      "care_tips": "Pumpkins need full sunlight and consistent moisture. Ensure enough space for sprawling vines."
    },
    {
      "name": "Sweet Potato",
      "light": "Full sun",
      "water": "Water consistently to keep soil moist",
      "soil": "Loose, well-draining soil",
      "temperature": "75-95°F (24-35°C)",
      "humidity": "Medium",
      "care_tips": "Sweet potatoes need full sunlight and consistent moisture. Harvest before the first frost."
    },
    {
      "name": "Carrot",
      "light": "Full sun",
      "water": "Water regularly to keep soil moist",
      "soil": "Loamy, well-draining soil",
      "temperature": "60-70°F (15-21°C)",
      "humidity": "Medium",
      "care_tips": "Carrots thrive in full sun and well-drained soil. Thin the plants to ensure enough space for roots."
    }
  ]
module.exports=plantCareData;