import { motion } from 'framer-motion';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, Eye, Heart, MessageCircle, Clock, Users } from 'lucide-react';

const engagementData = [
  { name: 'Mon', views: 4000, likes: 2400 },
  { name: 'Tue', views: 3000, likes: 1398 },
  { name: 'Wed', views: 5000, likes: 3800 },
  { name: 'Thu', views: 2780, likes: 1908 },
  { name: 'Fri', views: 6890, likes: 4800 },
  { name: 'Sat', views: 8390, likes: 5800 },
  { name: 'Sun', views: 7490, likes: 4300 },
];

const reelPerformance = [
  { name: '15s', engagement: 85 },
  { name: '30s', engagement: 92 },
  { name: '45s', engagement: 78 },
  { name: '60s', engagement: 65 },
  { name: '90s', engagement: 45 },
];

const topReels = [
  { title: 'Morning routine hack', views: '2.4M', engagement: '+45%' },
  { title: 'Product unboxing', views: '1.8M', engagement: '+38%' },
  { title: 'Behind the scenes', views: '1.2M', engagement: '+52%' },
];

const statCards = [
  { label: 'Total Views', value: '24.5M', change: '+12%', icon: Eye },
  { label: 'Engagement Rate', value: '8.2%', change: '+2.4%', icon: Heart },
  { label: 'Competitors', value: '47', change: '+5', icon: Users },
  { label: 'Best Time', value: '6PM', change: 'Wed', icon: Clock },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DashboardMockup() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Browser Chrome */}
      <div className="rounded-xl border border-border overflow-hidden bg-surface shadow-2xl">
        {/* Browser Header */}
        <div className="bg-surface-elevated px-4 py-3 border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-background rounded-md px-4 py-1.5 text-xs text-muted-foreground max-w-xs w-full text-center">
              app.reachinsta.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 bg-background">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-3 rounded-lg bg-surface border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs text-[#FF4500] font-medium">{stat.change}</span>
                </div>
                <p className="text-lg font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Engagement Chart */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-lg bg-surface border border-border"
            >
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
                Weekly Engagement
              </h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={engagementData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF4500" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="#525252" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stroke="#FF4500"
                      fillOpacity={1}
                      fill="url(#colorViews)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Reel Duration Performance */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-lg bg-surface border border-border"
            >
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
                Duration Performance
              </h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reelPerformance}>
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="#525252" />
                    <YAxis tick={{ fontSize: 10 }} stroke="#525252" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="engagement" fill="#FF4500" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Top Reels Table */}
          <motion.div
            variants={itemVariants}
            className="p-4 rounded-lg bg-surface border border-border"
          >
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
              Top Performing Reels
            </h4>
            <div className="space-y-2">
              {topReels.map((reel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-4">{index + 1}</span>
                    <span className="text-sm">{reel.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{reel.views}</span>
                    <span className="text-xs text-[#FF4500] font-medium">{reel.engagement}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF4500]/5 blur-3xl rounded-full" />
    </motion.div>
  );
}
