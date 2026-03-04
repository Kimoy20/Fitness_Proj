import Link from "next/link";
import {
  ArrowRight,
  Users,
  MapPin,
  Zap,
  Sparkles,
  Heart,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                Discover Your Perfect Activity
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              SportFinder
            </h1>

            <p className="text-2xl text-gray-600 mb-4 font-light">
              Your Movement Matchmaker
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop wondering where to start. Our intelligent matching system
              helps you discover the sports and activities that perfectly align
              with your personality, schedule, and social preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/quiz"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Find Your Sport
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/sports"
                className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
              >
                Browse All Sports
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-600">Sports Profiles</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                5
              </div>
              <div className="text-gray-600">Smart Questions</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-600">Personalized</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                0$
              </div>
              <div className="text-gray-600">To Start</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why SportFinder Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We match you with activities you'll actually stick with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Social Matching
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Find activities that match your social style - from solo
                workouts to team sports. We understand that who you exercise
                with matters as much as what you do.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Location Aware
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indoor or outdoor, we'll match you with activities that fit your
                environment preferences and accessibility needs.
              </p>
              <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Intensity Levels
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                From gentle yoga to high-intensity training, find your perfect
                energy match that challenges you without overwhelming you.
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built For Real People
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Gym-Averse Friendly
              </h3>
              <p className="text-white/80">
                Perfect for people who find traditional gyms intimidating or
                boring
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Beginner Focused
              </h3>
              <p className="text-white/80">
                Designed for those starting their fitness journey
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Science-Based
              </h3>
              <p className="text-white/80">
                Matching algorithm based on behavioral psychology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Sport?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who've discovered activities they actually love doing
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
