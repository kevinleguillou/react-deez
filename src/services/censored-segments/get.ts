import supabase from '@/services/supabase/client'

const getCensoredSegments = async (videoId: string) => {
  const { data } = await supabase
    .from('censored_segments')
    .select('*, videos(resource_id)')
    .eq('videos.resource_id', videoId)
  
    return data ?? []
}

export default getCensoredSegments