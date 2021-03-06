import { FC } from 'react'
import { NetworkStatus } from '@apollo/client'

import { ActivitySectionContainer } from './ActivitySectionStyles'
import ButtonLink from '../../UI/Button/ButtonLink/ButtonLinkComponent'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import ActivityCard from '../../Activity/ActivityCard/ActivityCardComponent'
import Button from '@/components/UI/Button/Button/ButtonComponent'
import { ActivitiesQueryVariables, Sort, useActivitiesQuery } from '@/generated/graphql'

interface ActivitySectionProps {
  inPage?: boolean
}

const ActivitySection: FC<ActivitySectionProps> = props => {
  const { inPage = false } = props

  const { data: { activities, _activitiesMeta }, fetchMore, networkStatus } = useActivitiesQuery({
    variables: inPage ? ActivitiesPageQueryVars : ActivitiesQueryVars,
    notifyOnNetworkStatusChange: true,
  })

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: activities.length
      },
    })
  }

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore
  const areMorePosts = activities.length < _activitiesMeta.count

  return (
    <ActivitySectionContainer
      inPage={inPage}
    >
      <HeadingSecondary
        text="les activités à l'ista larache"
      />

      {activities.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          reverse={index % 2 !== 0}
        />
      ))}

      {!inPage && (
        <ButtonLink
          href='/activities'
          text='Afficher tous les activités'
          passHref
        />
      )}

      {inPage && areMorePosts && (
        <Button
          text={loadingMorePosts ? 'Chargement...' : 'Montre plus'}
          onClick={loadMorePosts}
          loading={loadingMorePosts}
        />
      )}
    </ActivitySectionContainer>
  )
}

export default ActivitySection

export const ActivitiesPageQueryVars: ActivitiesQueryVariables = {
  take: 5,
  skip: 0,
  orderBy: {
    date: Sort.Desc,
  },
}

export const ActivitiesQueryVars: ActivitiesQueryVariables = {
  take: 2,
  skip: 0,
  orderBy: {
    date: Sort.Desc,
  },
}
