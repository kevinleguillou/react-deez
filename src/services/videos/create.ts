import supabase from '@/services/supabase/client'

const createVideo = async (videoId: string) => {
  return await supabase
    .from('videos')
    .insert([{
      platform_id: 'youtube',
      resource_id: videoId
    }])
}

export default createVideo