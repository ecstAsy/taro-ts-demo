export interface InfoProps {
  cover_image_w640: string,
  name: string,
  date_added: string,
  day_count: number,
  view_count: number,
  popular_place_str: string,
  user: userProps,
  liked_count: number,
  total_comments_count: number,
  first_day: string,
  recommendations: number,
  photo_webtrip: string,
  text: string,
  local_time: string
}

export interface userProps {
  avatar_l: string,
  name: string
}